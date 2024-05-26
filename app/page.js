'use client';

import React from 'react';
import Head from 'next/head';
import TodoList from '../components/TodoList';

import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weights: [400, 500, 700],
});


export default function Home() {
  return (
    <>
      <Head>
        <title>Lista de cadena de textos (Todo App)</title>
        <meta name="description" content="Reto para la posición de Front End Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <TodoList />
      </main>
    </>
  );
}