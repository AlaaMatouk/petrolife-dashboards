import React, { useState, useEffect } from 'react';
import { processIcons, filterIcons, copyToClipboard, getCategories, type IconInfo } from '../../utils/icons';

const IconPreview: React.FC = () => {
  const [icons, setIcons] = useState<IconInfo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredIcons, setFilteredIcons] = useState<IconInfo[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories] = useState<string[]>(['all', ...getCategories()]);

  useEffect(() => {
    // Process icons using utility function
    const processedIcons = processIcons();
    setIcons(processedIcons);
    setFilteredIcons(processedIcons);
  }, []);

  useEffect(() => {
    // Filter icons based on search term and category
    let filtered = icons;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(icon => icon.category === selectedCategory);
    }
    
    filtered = filterIcons(filtered, searchTerm);
    setFilteredIcons(filtered);
  }, [searchTerm, selectedCategory, icons]);

  const handleCopyToClipboard = async (text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      // You could add a toast notification here
      console.log('Copied to clipboard:', text);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Icon Preview</h1>
          <p className="text-gray-600">
            Browse and copy icon names for use in your components. 
            This page automatically updates when new icons are added.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search icons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex-1 max-w-xs">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6 flex gap-4 text-sm text-gray-600">
          <span>Total Icons: {icons.length}</span>
          <span>Showing: {filteredIcons.length}</span>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredIcons.map((icon) => (
            <div
              key={icon.filename}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon Display */}
              <div className="flex items-center justify-center h-16 mb-3 bg-gray-50 rounded-lg">
                <img
                  src={`/src/assets/imgs/icons/${icon.filename}`}
                  alt={icon.name}
                  className="max-h-12 max-w-12 object-contain"
                  onError={(e) => {
                    // Fallback for missing icons
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="text-gray-400 text-xs text-center">
                        <div class="text-2xl mb-1">📁</div>
                        <div>Icon not found</div>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Icon Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 text-sm truncate" title={icon.name}>
                    {icon.name}
                  </h3>
                  {icon.category && (
                    <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                      {icon.category}
                    </span>
                  )}
                </div>
                
                {/* Filename with copy button */}
                <div className="flex items-center gap-2">
                  <code className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded flex-1 truncate">
                    {icon.filename}
                  </code>
                  <button
                    onClick={() => handleCopyToClipboard(icon.filename)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    title="Copy filename"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>

                {/* Usage example */}
                <div className="text-xs text-gray-500">
                  <div className="font-medium mb-1">Usage:</div>
                  <code className="block bg-gray-50 p-1 rounded text-xs">
                    {`<img src="/src/assets/imgs/icons/${icon.filename}" />`}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredIcons.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No icons found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-500 text-center">
            <p>
              To add new icons, place them in <code className="bg-gray-100 px-2 py-1 rounded">src/assets/imgs/icons/</code> 
              and update the <code className="bg-gray-100 px-2 py-1 rounded">iconList</code> array in this component.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconPreview;
