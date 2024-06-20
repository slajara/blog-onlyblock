'use client';
import Link from 'next/link';

function ClientSideRoute({
    children,
    route,
  }: Readonly<{
    children: React.ReactNode;
    route:string;
  }>) {
  return (
    <Link href={route}>{children}</Link>
  )
}

export default ClientSideRoute