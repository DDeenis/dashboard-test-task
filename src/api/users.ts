interface Photo {
  id: number;
  url: string;
  thumbnailUrl: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

export interface UserExtended extends User {
  avatar: string;
  distance: "low" | "normal" | "high";
}

const maxResults = 8;

const fetchPhotos = (): Promise<Photo[]> => {
  return fetch(
    `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${maxResults}`
  ).then((r) => r.json());
};

const fetchUsers = (): Promise<User[]> => {
  return fetch(
    `https://jsonplaceholder.typicode.com/users?_start=0&_limit=${maxResults}`
  ).then((r) => r.json());
};

export const fetchUsersExtended = async (): Promise<UserExtended[]> => {
  const users = await fetchUsers();
  const photos = await fetchPhotos();

  return users.map((u, i) => {
    const randomNum = Math.random() * 100;
    let distance: UserExtended["distance"];

    if (randomNum < 40) distance = "low";
    else if (randomNum > 60) distance = "high";
    else distance = "normal";

    return {
      ...u,
      avatar: photos[i].thumbnailUrl,
      distance,
    };
  });
};
