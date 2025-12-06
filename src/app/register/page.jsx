import RegisterForm from "./components/RegisterForm";



   export default function RegisterPage() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-4">Register</h2>

        <RegisterForm></RegisterForm>

        <p className="text-sm text-center mt-4">
          Have an account?{" "}
          <a href="/login" className="text-primary font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
