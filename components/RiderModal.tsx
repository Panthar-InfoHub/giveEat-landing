'use client';

import React from "react"

import { useState } from 'react';
import { X } from 'lucide-react';

interface RiderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RiderModal({ isOpen, onClose }: RiderModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    bikeType: '',
    city: '',
    workingPreference: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Rider Form Data:', formData);
    // Handle form submission here
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      bikeType: '',
      city: '',
      workingPreference: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100  bg-clip-text mb-3">
            <h2 className="text-3xl font-bold">Join as Delivery Rider</h2>
          </div>
          <p className="text-gray-600">Start earning with flexible working hours</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Basic Details Section */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">Basic Details</h3>

            {/* Full Name */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                required
              />
            </div>
          </div>

          {/* Vehicle Info Section */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">Vehicle Info</h3>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Bike Type</label>
              <select
                name="bikeType"
                value={formData.bikeType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                required
              >
                <option value="">Select bike type</option>
                <option value="Bike">Bike</option>
                <option value="Scooty">Scooty</option>
                <option value="Electric Bike">Electric Bike</option>
              </select>
            </div>
          </div>

          {/* Location Section */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">Location</h3>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">City / Area</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city or area"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                required
              />
            </div>
          </div>

          {/* Availability Section */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">Availability</h3>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Working Preference</label>
              <select
                name="workingPreference"
                value={formData.workingPreference}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                required
              >
                <option value="">Select working preference</option>
                <option value="Part Time">Part Time</option>
                <option value="Full Time">Full Time</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
