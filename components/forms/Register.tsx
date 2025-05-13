"use client";
import React, { useState } from "react";

import Link from "next/link";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmai] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await axios.post("/api/register");
    console.log(res);
  };
  return (
    <div className="w-full">
      <form className="w-full" onSubmit={handleSubmit}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">
              Sign Up from mu auty
            </CardTitle>
            <CardDescription>
              Enter your details to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                typeof="text"
                disabled={pending}
                id="username"
                name="username"
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                disabled={pending}
                value={email}
                name="email"
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmai(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                disabled={pending}
                value={password}
                name="password"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button className="w-full" type="submit" disabled={pending}>
              Sign Up
            </button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Have an account?
          <Link className="underline ml-2" href=" ">
            Sing In
          </Link>
        </div>
      </form>
    </div>
  );
}
