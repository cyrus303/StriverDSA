const Users = async () => {
  const response = await fetch('https://dummyjson.com/users/1');
  const data = await response.json();
  return data;
};

Users().then((res) => console.log(res));
