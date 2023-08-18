import Head from 'next/head';

export default function Home() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
            <Head>
                <title>Hello World!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Hello World!
        </div>
    );
}
