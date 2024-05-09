export interface IUser {
  id: string;
  profilePic?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  dob?: string | Date | null;
  class?: string;
  lacClub?: string;
  state?: string;
  school?: string;
}