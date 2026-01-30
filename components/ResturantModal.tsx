'use client';

import React from "react"

import { useState } from 'react';
import { X } from 'lucide-react';

interface RestaurantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RestaurantModal({ isOpen, onClose }: RestaurantModalProps) {
  const [formData, setFormData] = useState({
    ownerName: '',
    restaurantName: '',
    email: '',
    mobile: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Restaurant Form Data:', formData);
    // Handle form submission here
    setFormData({
      ownerName: '',
      restaurantName: '',
      email: '',
      mobile: '',
      address: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100  bg-clip-text mb-3">
            <h2 className="text-3xl font-bold">Register Your Restaurant</h2>
          </div>
          <p className="text-gray-600">Join thousands of restaurants growing with Giveat</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Owner Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
              required
            />
          </div>

          {/* Restaurant Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Restaurant Name</label>
            <input
              type="text"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              placeholder="Enter restaurant name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
              required
            />
          </div>

          {/* Email ID */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
              required
            />
          </div>

          {/* Restaurant Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Restaurant Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter complete address"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition mt-8"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
