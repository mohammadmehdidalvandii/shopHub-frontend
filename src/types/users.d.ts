export interface Address {
  label?: string;
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

export type UserRole = 'ADMIN' | 'CUSTOMER';
export type Gender = 'male' | 'female' | 'other';

export type UserProps = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  phone: string;
  profileImage?: string;
  dateOfBirth?: string; // فرانت‌اند معمولا با string کار میکنه
  addresses?: Address[];
  isActive?: boolean;
  gender?: Gender;
  createdAt?: string;
  updatedAt?: string;
}