export interface User {
  email: string;
  firstName?: string;
  lastName?: string;
  role: 'doctor' | 'student';

  uid?: string;
  doctorUid?: string;

  birthDate?: Date;
  gender?: string;
}
