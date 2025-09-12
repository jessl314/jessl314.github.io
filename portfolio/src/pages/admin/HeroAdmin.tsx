import { useState, useEffect } from 'react';
import { useAuth } from '../../components/admin/AuthHandler.js';

interface HeroData {
    _id?: string;
    animated: string;
    elevPitch: string;
}

const HeroAdmin = () => {
    const [heroData, setHeroData] = useState<HeroData>({
        animated: '',
        elevPitch: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const { isAuth } = useAuth();

    // Fetch hero data on component mount
    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await fetch('https://jesslpersonalwebsite.onrender.com/api/hero');
                const data = await response.json();
                if (data && data.length > 0) {
                    setHeroData(data[0]); // Assuming you want the first hero entry
                }
            } catch (error) {
                console.error('Error fetching hero data:', error);
                setMessage('Error loading hero data');
            } finally {
                setLoading(false);
            }
        };

        fetchHeroData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setHeroData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage('');

        try {
            const url = heroData._id 
                ? `https://jesslpersonalwebsite.onrender.com/api/hero/${heroData._id}`
                : 'https://jesslpersonalwebsite.onrender.com/api/hero';
            
            const method = heroData._id ? 'PUT' : 'POST';
            
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(heroData)
            });

            if (response.ok) {
                const updatedData = await response.json();
                setHeroData(updatedData);
                setMessage('Hero section updated successfully!');
            } else {
                throw new Error('Failed to update hero section');
            }
        } catch (error) {
            console.error('Error updating hero:', error);
            setMessage('Error updating hero section');
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
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Hero Section</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="animated" className="block text-sm font-medium text-gray-700 mb-2">
                            Animated Text
                        </label>
                        <input
                            type="text"
                            id="animated"
                            name="animated"
                            value={heroData.animated}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#afcdbd] focus:border-transparent"
                            placeholder="Enter animated text (e.g., 'Welcome to My Portfolio')"
                        />
                    </div>

                    <div>
                        <label htmlFor="elevPitch" className="block text-sm font-medium text-gray-700 mb-2">
                            Elevator Pitch
                        </label>
                        <textarea
                            id="elevPitch"
                            name="elevPitch"
                            value={heroData.elevPitch}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#afcdbd] focus:border-transparent"
                            placeholder="Enter your elevator pitch (e.g., 'Frontend Developer | Designer | Problem Solver')"
                        />
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

export default HeroAdmin;
