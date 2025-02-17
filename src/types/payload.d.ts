export interface ITestimonialsPayload {
  mt_user_uuid: string;
  mt_rating: number;
  mt_comment: string;
}

export interface ILoginPayload {
  mu_email: string;
  mu_password: string;
}

export interface IRegisterPayload extends ILoginPayload {
  mu_phone_number: string;
  mu_full_name: string;
  mu_address: string;
  mu_province: string;
  mu_city: string;
  mu_district: string;
}