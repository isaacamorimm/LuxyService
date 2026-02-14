import { Button } from '../../components/Button';

export const Home = () => {
    return (
        <div className="space-y-6">
            <section className="text-center py-20">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Welcome to Our Corporate Portfolio
                </h1>
                <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                    Scalable solutions for modern businesses.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button onClick={() => console.log('Get Started')}>Get Started</Button>
                    <Button variant="outline">Learn More</Button>
                </div>
            </section>
        </div>
    );
};
