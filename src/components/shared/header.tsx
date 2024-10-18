import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* left side */}
        <div>
          <Image src="/logo.png" alt="logo" width={35} height={35}></Image>
          <span>
            <h1>Маленька Італія</h1>
            <p>Справжня неополітанська</p>
          </span>
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {};
