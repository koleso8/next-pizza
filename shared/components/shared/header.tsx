import React from 'react';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import { Button } from '../ui';
import { User } from 'lucide-react';
import Link from 'next/link';
import { CartButton, Container, SearchInput } from '.';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* left side */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={35} height={35}></Image>
            <span>
              <h1 className="text-2xl font-extrabold">Маленька Італія</h1>
              <p className="text-sm text-slate-700">Справжня неополітанська</p>
            </span>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        {/* right side */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Увійти
          </Button>
          <div>
            <CartButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {};
