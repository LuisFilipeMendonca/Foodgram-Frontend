export interface IRecipieCard {
  _id: string;
  name: string;
  photoUrl: string;
  votes: number;
  votesCount: number;
  ratings: { _id: string }[];
}

export interface IRecipieCardFull extends IRecipieCard {
  description: string;
  duration: number;
  ingredients: string[];
  level: string;
  steps: string[];
  servings: [];
}

export interface IRecipie extends IRecipieCardFull {
  createdAt: string;
  photo: string;
  user: {
    _id: string;
    username: string;
  };
}
