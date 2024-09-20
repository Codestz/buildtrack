import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';

export function UserLoginComponent() {
  const handleSubmit = (email, password, rememberMe) => {
    console.log(email, password, rememberMe);
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="w-full max-w-md p-4">
        <Card className="bg-white shadow-md rounded-lg">
          <CardHeader className="flex flex-col items-center pb-0">
            <h1 className="text-2xl font-bold text-center pb-6 font-sans leading-tight">
              Login to BuildingFax
            </h1>
          </CardHeader>
          <CardBody className="gap-4">
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              className="w-full"
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              className="w-full"
            />
            <div className="flex justify-between items-center">
              <Checkbox defaultSelected={false} size="sm">
                <span className="text-sm text-gray-600">
                  Remember me
                </span>
              </Checkbox>
              <Link href="#" size="sm" className="text-blue-600">
                Forgot Password?
              </Link>
            </div>
            <Button
              color="primary"
              className="w-full bg-blue-600 text-white"
              onClick={() => handleSubmit('email', 'password', false)}
            >
              Sign In
            </Button>
          </CardBody>
          <CardFooter className="flex-col items-center gap-4">
            <p className="text-center text-sm text-gray-600">
              By logging in, you agree to BuildingFax's{' '}
              <Link href="#" size="sm" className="text-blue-600">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" size="sm" className="text-blue-600">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex flex-col items-center gap-2 w-full">
              <p className="text-sm text-gray-600">
                Or sign in with:
              </p>
              <div className="flex gap-4">
                <Button
                  auto
                  color="error"
                  className="bg-red-600 text-white"
                  icon={<Icon icon="fa6-regular:envelope" />}
                >
                  Google
                </Button>
                <Button
                  auto
                  color="primary"
                  className="bg-blue-600 text-white"
                  icon={<Icon icon="fa6-regular:user" />}
                >
                  LinkedIn
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="#" size="sm" className="text-blue-600">
                Create an account
              </Link>
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
