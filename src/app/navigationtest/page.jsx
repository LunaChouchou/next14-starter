"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  const router = useRouter(); // hook
  const pathname = usePathname();
  const searchParams = userSearchParams();

  const q = searchParams.get("q");

  console.log(pathname); // /navigationtest
  console.log(q);

  const handleClick = () => {
    console.log("clicked");
    router.push("/");
    // router.replace("/"); // not add to browser history stack
    // router.refresh(); // create a new request
    // router.back();
    // router.forward();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
