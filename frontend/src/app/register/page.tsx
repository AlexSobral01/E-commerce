import Input from "@/components/Input";
import axios from "axios";

export default function page() {
  axios.post('http://localhost:3001/users')
  return (
    <form method="post" action={"http://localhost:3001/users"} className="flex flex-col items-center">
      <div className="flex flex-col gap-3 w-10/12 mt-10">
        <h1 className="font-medium text-3xl text-center">Register</h1>
        <Input type="text" placeholder="username" name="username" id="username" contentLabel="username"/>
        <Input type="password" placeholder="password" name="password" id="password" contentLabel="password" />
        <Input type="email" placeholder="email@example.com" name="email" id="email" contentLabel="email" />
        <button className="h-12 text-white bg-green-500 hover:bg-green-700 transition ease-in-out duration-500">Sign up</button>
      </div>
    </form>
  )
}
