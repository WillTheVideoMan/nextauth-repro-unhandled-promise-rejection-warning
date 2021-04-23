import { signIn } from "next-auth/client";

const handleClick = async () => {
  try {
    const promise = await signIn("email", {
      email: "joe@smith.com",
      redirect: false,
    });
    alert(promise.error);
  } catch {
    alert("Handling Error!");
  }
  alert("Not Pending!");
};

export default function Home() {
  return <button onClick={handleClick}>Sign In</button>;
}
