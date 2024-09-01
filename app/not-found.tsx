import Link from 'next/link';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Container className="flex flex-col my-20 h-screen text-center">
      <h1 className="text-[128px] font-black ">Oops!</h1>
      <p className="text-xl mb-4 font-medium">404 - PAGE NOT FOUND</p>
      <Link href="/">
        <Button variant={'outline'} className="px-4 py-2">
          Go back home
        </Button>
      </Link>
    </Container>
  );
}
