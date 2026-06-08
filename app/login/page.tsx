import { LoginForm } from "./login-form";

export const metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <section className="container mt-12 grid min-h-[60vh] place-items-center">
      <LoginForm />
    </section>
  );
}
