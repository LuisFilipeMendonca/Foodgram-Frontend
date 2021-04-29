export interface IUserState {
  isLogged: boolean;
  userId: string | null;
  userToken: string | null;
  userEmail: string | null;
  userName: string | null;
  isAppLoading: boolean;
  isLoading: boolean;
}

export const userInitialState: IUserState = {
  isLogged: false,
  userId: null,
  userEmail: null,
  userName: null,
  userToken: null,
  isAppLoading: true,
  isLoading: false,
};
