export interface IWhyUs {
  mwu_id: number;
  mwu_title: string;
  mwu_description: string;
  mwu_icon_url: string;
}

export interface ITestimonials {
  mt_id:        number;
  mt_rating:    number;
  mt_comment:   string;
  mt_createdAt: Date;
  mt_updatedAt: Date;
  user:         IUser;
}

export interface IUser {
  mu_full_name: string;
  mu_email:     string;
  mu_image_url: null;
}
