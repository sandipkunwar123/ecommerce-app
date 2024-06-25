import { IUserItem } from "./user.type";

export default function userItem(props: IUserItem) {
  const { name, email } = props;
  return (
    <div>
      <h1>{name.firstname}</h1>
      <p>{email}</p>
    </div>
  );
}
