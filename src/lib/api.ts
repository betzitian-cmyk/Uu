import axios from 'axios';

export type WidgetType =
  | 'bid_offer'
  | 'warranty_quote'
  | 'financing_application'
  | 'test_drive_booking'
  | 'service_request'
  | 'special_find'
  | 'consignment_request'
  | 'general_contact';

export type Submission = {
  id: number;
  widget_type: WidgetType;
  name: string;
  email: string;
  phone: string;
  payload: Record<string, unknown>;
  created_at: string;
};

export async function createSubmission(input: {
  widgetType: WidgetType;
  name: string;
  email: string;
  phone?: string;
  payload: Record<string, unknown>;
}) {
  const { data } = await axios.post('/api/submissions', input);
  return data as { id: number };
}

export async function listSubmissions(type?: WidgetType) {
  const { data } = await axios.get('/api/submissions', { params: type ? { type } : undefined });
  return data as Submission[];
}
