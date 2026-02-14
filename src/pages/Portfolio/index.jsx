import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';

export const Portfolio = () => {
    const { data, loading, error } = useFetch('/projects'); // Example endpoint

    // Mock data for display if API is not set up
    const projects = data || [
        { id: 1, title: 'Project Alpha', description: 'A fintech solution for modern banking.' },
        { id: 2, title: 'Project Beta', description: 'E-commerce platform with AI recommendations.' },
        { id: 3, title: 'Project Gamma', description: 'Healthcare management system.' },
    ];

    if (loading) return <div className="text-center py-10">Loading projects...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error loading projects.</div>;

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Work</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
