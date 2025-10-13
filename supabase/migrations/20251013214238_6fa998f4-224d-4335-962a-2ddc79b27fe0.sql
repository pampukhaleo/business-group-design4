-- Add foreign key constraints to link user_id to profiles table
-- This allows querying user profile information from lead_comments and lead_history

ALTER TABLE public.lead_comments
ADD CONSTRAINT lead_comments_user_id_fkey 
FOREIGN KEY (user_id) 
REFERENCES public.profiles(id) 
ON DELETE CASCADE;

ALTER TABLE public.lead_history
ADD CONSTRAINT lead_history_user_id_fkey 
FOREIGN KEY (user_id) 
REFERENCES public.profiles(id) 
ON DELETE CASCADE;