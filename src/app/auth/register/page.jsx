"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="font-bold text-4xl mb-4">Register</h1>

        <label htmlFor="username" className="label">
          Username:
        </label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
          className="input bg-gray-200 w-full"
          placeholder="yourUser123"
        />

        {errors.username && (
          <span className="text-red-500 text-xs">
            {errors.username.message}
          </span>
        )}

        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          className="input bg-gray-200 w-full"
          placeholder="user@email.com"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="label">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          className="input bg-gray-200 w-full"
          placeholder="********"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

        <label
          htmlFor="confirmPassword"
          className="label"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm Password is required",
            },
          })}
          className="input bg-gray-200 w-full"
          placeholder="********"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}

        <button className="btn btn-primary my-2">
          Register
        </button>
      </form>
    </div>
  );
}
export default RegisterPage;
