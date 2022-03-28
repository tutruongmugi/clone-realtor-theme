import { useRouter } from "next/router";
import { User } from "../../../interface";

export default function UserProfileMinimal({ userData }: { userData: User }) {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc",
        borderRadius: 16,
        padding: 16,
      }}
      onClick={() => router.push("/home")}
    >
      <p>{userData.name}</p>

      <small>{userData.age}</small>
    </div>
  );
}
