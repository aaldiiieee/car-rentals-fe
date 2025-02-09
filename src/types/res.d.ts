export interface IWhyUs {
  mwu_id:          number;
  mwu_title:       string;
  mwu_description: string;
  mwu_icon_url:    string;
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

export interface ICars {
  mcp_id:              number;
  mcp_uuid:            string;
  mcp_plate:           string;
  mcp_manufacture:     string;
  mcp_model:           string;
  mcp_image_url:       string;
  mcp_image_public_id: string;
  mcp_rent_type:       string;
  mcp_rent_per_day:    number;
  mcp_capacity:        number;
  mcp_description:     string;
  mcp_transmission:    string;
  mcp_available:       string;
  mcp_year:            number;
  mcp_createdAt:       string;
  mcp_updatedAt:       string;
}
