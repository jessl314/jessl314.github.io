import { useState, useEffect } from 'react';
import { useAuth } from '../../components/admin/AuthHandler.js';

interface AboutData {
    _id?: string;
    bio: string;
    skills?: string[];
    experience?: string;
    education?: string;
}

const AboutAdmin = () => {
    const [aboutData, setAboutData] = useState<AboutData>({
        bio: '',
        skills: [],
        experience: '',
        education: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [newSkill, setNewSkill] = useState('');
    const { isAuth } = useAuth();

    // Fetch about data on component mount
    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await fetch('https://jesslpersonalwebsite.onrender.com/api/about');
                const data = await response.json();
                if (data && data.length > 0) {
                    setAboutData(data[0]); // Assuming you want the first about entry
                }
            } catch (error) {
                console.error('Error fetching about data:', error);
                setMessage('Error loading about data');
            } finally {
                setLoading(false);
            }
        };

        fetchAboutData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAboutData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddSkill = () => {
        if (newSkill.trim() && aboutData.skills) {
            setAboutData(prev => ({
                ...prev,
                skills: [...(prev.skills || []), newSkill.trim()]
            }));
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (index: number) => {
        if (aboutData.skills) {
            setAboutData(prev => ({
                ...prev,
                skills: prev.skills!.filter((_, i) => i !== index)
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage('');

        try {
            const url = aboutData._id 
                ? `https://jesslpersonalwebsite.onrender.com/api/about/${aboutData._id}`
                : 'https://jesslpersonalwebsite.onrender.com/api/about';
            
            const method = aboutData._id ? 'PUT' : 'POST';
            
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(aboutData)
            });

            if (response.ok) {
                const updatedData = await response.json();
                setAboutData(updatedData);
                setMessage('About section updated successfully!');
            } else {
                throw new Error('Failed to update about section');
            }
        } catch (error) {
            console.error('Error updating about:', error);
            setMessage('Error updating about section');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="p-6">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit About Section</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                            Bio
                        </label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={aboutData.bio}
                            onChange={handleInputChange}
                            rows={6}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#afcdbd] focus:border-transparent"
                            placeholder="Tell us about yourself..."
                        />
                    </div>

                    <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                            Experience
                        </label>
                        <textarea
                            id="experience"
                            name="experience"
                            value={aboutData.experience || ''}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#afcdbd] focus:border-transparent"
                            placeholder="Describe your professional experience..."
                        />
                    </div>

                    <div>
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                            Education
                        </label>
                        <textarea
                            id="education"
                            name="education"
                            value={aboutData.education || ''}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#afcdbd] focus:border-transparent"
                            placeholder="List your educational background..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Skills
                        </label>
                        <div className="flex space-x-2 mb-3">
                            <input
                                type="text"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#afcdbd] focus:border-transparent"
                                placeholder="Add a skill..."
                            />
                            <button
                                type="button"
                                onClick={handleAddSkill}
                                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                            >
                                Add
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {aboutData.skills?.map((skill, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#afcdbd] text-[#0e1712]"
                                >
                                    {skill}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveSkill(index)}
                                        className="ml-2 text-[#0e1712] hover:text-red-600"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {message && (
                        <div className={`p-3 rounded-md ${
                            message.includes('Error') 
                                ? 'bg-red-100 text-red-700 border border-red-200' 
                                : 'bg-green-100 text-green-700 border border-green-200'
                        }`}>
                            {message}
                        </div>
                    )}

                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-6 py-2 bg-[#afcdbd] text-[#0e1712] rounded-md hover:bg-[#9bb8a8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {saving ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AboutAdmin;
