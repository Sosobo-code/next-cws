import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <header className="pb-6 md:pb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold pb-2">Colour Picker</h1>
          <p className="text-muted-foreground">Pick your favourite colour.</p>
        </header>
      </main>
    </div>
  );
};

export default Page;