import AuthButton from "@/app/(form)/(auth)/AuthButton";
import { GithubAuthProvider } from "firebase/auth";
import { FaGithub } from "react-icons/fa6";

export default function Login() {
  const githubProvider = new GithubAuthProvider();
  return <AuthButton icon={FaGithub}>Login with Github</AuthButton>;
}
