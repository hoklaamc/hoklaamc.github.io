import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-4">
      <h1 className="text-3xl">Hok Laam Cheng</h1>
      <p>Software Engineer</p>
    </div>
  );
}
