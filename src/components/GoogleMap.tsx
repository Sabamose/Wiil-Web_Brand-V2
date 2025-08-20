import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Declare google maps types
declare global {
  interface Window {
    google: any;
  }
}

interface GoogleMapProps {
  address: string;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, className = "" }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [apiKey, setApiKey] = useState<string>('');
  const [apiKeyInput, setApiKeyInput] = useState<string>('');
  const [showApiKeyInput, setShowApiKeyInput] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const initializeMap = async (key: string) => {
    if (!mapRef.current || !key) return;

    try {
      const loader = new Loader({
        apiKey: key,
        version: 'weekly',
        libraries: ['places', 'geocoding']
      });

      await loader.load();

      const geocoder = new window.google.maps.Geocoder();
      
      // Geocode the address
      geocoder.geocode({ address }, (results: any[], status: string) => {
        if (status === 'OK' && results && results[0]) {
          const location = results[0].geometry.location;
          
          const mapInstance = new window.google.maps.Map(mapRef.current!, {
            center: location,
            zoom: 16,
            mapTypeId: 'roadmap',
            styles: [
              {
                featureType: 'all',
                elementType: 'geometry.fill',
                stylers: [{ color: '#f8f9fa' }]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{ color: '#0891b2' }]
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#e5e7eb' }]
              }
            ]
          });

          // Add marker
          new window.google.maps.Marker({
            position: location,
            map: mapInstance,
            title: address,
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#0891b2"/>
                </svg>
              `),
              scaledSize: new window.google.maps.Size(32, 32),
              anchor: new window.google.maps.Point(16, 32)
            }
          });

          setMap(mapInstance);
          setError('');
        } else {
          setError('Failed to geocode address');
        }
      });
    } catch (err) {
      setError('Failed to load Google Maps. Please check your API key.');
      console.error('Google Maps error:', err);
    }
  };

  const handleApiKeySubmit = () => {
    if (apiKeyInput.trim()) {
      setApiKey(apiKeyInput.trim());
      setShowApiKeyInput(false);
      localStorage.setItem('googleMapsApiKey', apiKeyInput.trim());
    }
  };

  useEffect(() => {
    // Check for stored API key
    const storedApiKey = localStorage.getItem('googleMapsApiKey');
    if (storedApiKey) {
      setApiKey(storedApiKey);
      setShowApiKeyInput(false);
    }
  }, []);

  useEffect(() => {
    if (apiKey) {
      initializeMap(apiKey);
    }
  }, [apiKey, address]);

  if (showApiKeyInput) {
    return (
      <div className={`${className} bg-gray-50 rounded-2xl p-8 flex flex-col items-center justify-center space-y-4`}>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Maps Setup Required</h3>
          <p className="text-sm text-gray-600 mb-4">
            To display the map, please enter your Google Maps API key.<br />
            Get your API key from the <a href="https://console.cloud.google.com/google/maps-apis" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Google Cloud Console</a>.
          </p>
        </div>
        <div className="w-full max-w-md space-y-3">
          <Input
            type="password"
            placeholder="Enter Google Maps API Key"
            value={apiKeyInput}
            onChange={(e) => setApiKeyInput(e.target.value)}
            className="focus-visible:ring-teal-500"
          />
          <Button 
            onClick={handleApiKeySubmit}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white focus-visible:ring-teal-500"
            disabled={!apiKeyInput.trim()}
          >
            Load Map
          </Button>
        </div>
        <button
          onClick={() => setShowApiKeyInput(false)}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Skip for now
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      <div ref={mapRef} className="w-full h-full rounded-2xl" />
      {error && (
        <div className="absolute inset-0 bg-gray-50 rounded-2xl flex items-center justify-center">
          <div className="text-center p-4">
            <p className="text-red-600 mb-2">{error}</p>
            <Button
              onClick={() => setShowApiKeyInput(true)}
              variant="outline"
              className="focus-visible:ring-teal-500"
            >
              Update API Key
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;