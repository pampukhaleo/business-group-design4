-- Add price column to leads table
ALTER TABLE public.leads 
ADD COLUMN price NUMERIC(10, 2);

COMMENT ON COLUMN public.leads.price IS 'Цена заявки в рублях';