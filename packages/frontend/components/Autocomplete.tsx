'use client';

import React, { useState } from 'react';
import { Combobox } from '@headlessui/react';

// Fetch autocomplete suggestions on input change
const fetchSuggestions = async (query: string) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=15`;
  const res = await fetch(url);
  return res.json();
};

const kebabCase = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

// Display suggestions in dropdown
const Autocomplete = () => {
  const [input, setInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const handleInputChange = async (e: any) => {
    const query = e.target.value;
    setInput(query);
    if (query) {
      const options = await fetchSuggestions(e.target.value);
      // show only unique options based on title and author
      const uniqueOptions = options.items
        ?.filter(
          (item: any, index: number, self: any) =>
            index ===
            self.findIndex(
              (i: any) =>
                i.volumeInfo.title === item.volumeInfo.title &&
                i.volumeInfo.authors?.join(', ') ===
                  item.volumeInfo.authors?.join(', ')
            )
        )
        .slice(0, 5);

      setSuggestions(uniqueOptions ?? []);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <Combobox value={input}>
      <Combobox.Input
        className="p-2 w-full border-2 border-blue-300"
        onChange={handleInputChange}
      />
      <Combobox.Options className="w-full">
        {suggestions.map((s: any) => (
          <Combobox.Option
            key={s.id}
            value={s.volumeInfo.title}
            className="width-full bg-slate-300 border-b-2 border-x-2 border-blue-300 p-2"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // kebab case the title and authors joined
              const key = kebabCase(`${s.volumeInfo.title} ${s.id}`);
            }}
          >
            {s.volumeInfo.authors
              ? `${s.volumeInfo.title}: ${s.volumeInfo.authors.join(', ')}`
              : s.volumeInfo.title}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default Autocomplete;
