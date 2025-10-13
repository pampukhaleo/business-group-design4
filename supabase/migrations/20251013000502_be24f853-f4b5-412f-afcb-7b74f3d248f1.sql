-- Create lead_comments table
CREATE TABLE public.lead_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX idx_lead_comments_lead_id ON public.lead_comments(lead_id);
CREATE INDEX idx_lead_comments_created_at ON public.lead_comments(created_at DESC);

-- Enable RLS
ALTER TABLE public.lead_comments ENABLE ROW LEVEL SECURITY;

-- RLS policies for lead_comments
CREATE POLICY "Admins and managers can view comments"
  ON public.lead_comments
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'manager'::app_role));

CREATE POLICY "Admins and managers can insert comments"
  ON public.lead_comments
  FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'manager'::app_role));

CREATE POLICY "Admins and managers can update own comments"
  ON public.lead_comments
  FOR UPDATE
  USING (
    user_id = auth.uid() AND 
    (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'manager'::app_role))
  );

CREATE POLICY "Admins can delete comments"
  ON public.lead_comments
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create lead_history table
CREATE TABLE public.lead_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  action TEXT NOT NULL,
  field_name TEXT,
  old_value TEXT,
  new_value TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX idx_lead_history_lead_id ON public.lead_history(lead_id);
CREATE INDEX idx_lead_history_created_at ON public.lead_history(created_at DESC);

-- Enable RLS
ALTER TABLE public.lead_history ENABLE ROW LEVEL SECURITY;

-- RLS policies for lead_history
CREATE POLICY "Admins and managers can view history"
  ON public.lead_history
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'manager'::app_role));

-- Trigger to update updated_at on comments
CREATE TRIGGER update_lead_comments_updated_at
  BEFORE UPDATE ON public.lead_comments
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Function to log lead changes
CREATE OR REPLACE FUNCTION public.log_lead_changes()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Log status changes
  IF OLD.status IS DISTINCT FROM NEW.status THEN
    INSERT INTO public.lead_history (lead_id, user_id, action, field_name, old_value, new_value)
    VALUES (NEW.id, auth.uid(), 'update', 'status', OLD.status::text, NEW.status::text);
  END IF;

  -- Log price changes
  IF OLD.price IS DISTINCT FROM NEW.price THEN
    INSERT INTO public.lead_history (lead_id, user_id, action, field_name, old_value, new_value)
    VALUES (NEW.id, auth.uid(), 'update', 'price', OLD.price::text, NEW.price::text);
  END IF;

  -- Log name changes
  IF OLD.name IS DISTINCT FROM NEW.name THEN
    INSERT INTO public.lead_history (lead_id, user_id, action, field_name, old_value, new_value)
    VALUES (NEW.id, auth.uid(), 'update', 'name', OLD.name, NEW.name);
  END IF;

  -- Log email changes
  IF OLD.email IS DISTINCT FROM NEW.email THEN
    INSERT INTO public.lead_history (lead_id, user_id, action, field_name, old_value, new_value)
    VALUES (NEW.id, auth.uid(), 'update', 'email', OLD.email, NEW.email);
  END IF;

  -- Log phone changes
  IF OLD.phone IS DISTINCT FROM NEW.phone THEN
    INSERT INTO public.lead_history (lead_id, user_id, action, field_name, old_value, new_value)
    VALUES (NEW.id, auth.uid(), 'update', 'phone', OLD.phone, NEW.phone);
  END IF;

  RETURN NEW;
END;
$$;

-- Create trigger to log changes
CREATE TRIGGER log_lead_changes_trigger
  AFTER UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.log_lead_changes();

-- Function to log lead creation
CREATE OR REPLACE FUNCTION public.log_lead_creation()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.lead_history (lead_id, user_id, action)
  VALUES (NEW.id, COALESCE(auth.uid(), '00000000-0000-0000-0000-000000000000'::uuid), 'created');
  RETURN NEW;
END;
$$;

-- Create trigger to log creation
CREATE TRIGGER log_lead_creation_trigger
  AFTER INSERT ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.log_lead_creation();