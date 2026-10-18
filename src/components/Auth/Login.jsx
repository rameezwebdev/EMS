import { useState } from "react";

const Login = () => {

  const [user, setUser] = useState({});

  const {userName, password} = user;

  const handleSubmit = (e) => {
     e.preventDefault();
     console.log('email',user.userName)
     console.log('pass',user.password)

     setUser(() => (
       {
      userName: "",
      password: "",
    }
     )
    );

  };

  return (
    
<div className="flex min-h-screen w-full items-center justify-center bg-slate-950 px-8 py-4">
  <div className="w-full max-w-md rounded-2xl border border-emerald-500/30 bg-slate-900 px-2 py-4 shadow-2xl shadow-emerald-500/10 sm:p-10">

    <h1 className="mb-7 text-center text-2xl font-bold tracking-tight text-white">
      Login
      <span className="text-emerald-400">.</span>
    </h1>

    <form className="flex w-full flex-col items-center gap-4" onSubmit={handleSubmit}>
      <input
        className="input-primary"
        type="email"
        value={userName}
        onChange={(e) => setUser((pre) => ({
          ...pre, userName: e.target.value
        }))}
        placeholder="Enter your email"
        required
      />

      <input
        className="input-primary"
        type="password"
        value={password}
        onChange={(e) => setUser((pre) => ({
          ...pre, password: e.target.value
        }))}
        placeholder="Enter your password"
        required
      />

      <button
        type="submit"
        className="btn-primary"
      >
        Login
      </button>
    </form>
  </div>
</div>

  )
}

export default Login
