import { Agency, Category, Complaint, User } from './types';

// Mock Users
export const MOCK_USERS: User[] = [
{
  id: 'user1',
  name: 'John Citizen',
  email: 'john@example.com',
  role: 'citizen'
},
{
  id: 'user2',
  name: 'Admin User',
  email: 'admin@gov.org',
  role: 'admin'
},
{
  id: 'user3',
  name: 'Transportation Agent',
  email: 'transport@gov.org',
  role: 'agency'
},
{
  id: 'user4',
  name: 'Utilities Manager',
  email: 'utilities@gov.org',
  role: 'agency'
}];


// Mock Agencies
export const MOCK_AGENCIES: Agency[] = [
{
  id: 'agency1',
  name: 'Department of Transportation',
  description: 'Handles road, traffic, and public transportation issues'
},
{
  id: 'agency2',
  name: 'Department of Utilities',
  description: 'Manages water, electricity, and waste management'
},
{
  id: 'agency3',
  name: 'Public Health Department',
  description: 'Handles public health concerns and sanitation'
},
{
  id: 'agency4',
  name: 'Parks & Recreation',
  description: 'Manages public parks, recreational areas, and facilities'
}];


// Mock Categories
export const MOCK_CATEGORIES: Category[] = [
{
  id: 'cat1',
  name: 'Road Issues',
  description: 'Potholes, road damage, traffic signals',
  agencyId: 'agency1'
},
{
  id: 'cat2',
  name: 'Public Transportation',
  description: 'Bus, train, or subway issues',
  agencyId: 'agency1'
},
{
  id: 'cat3',
  name: 'Water Supply',
  description: 'Water outages, leaks, or quality issues',
  agencyId: 'agency2'
},
{
  id: 'cat4',
  name: 'Electricity',
  description: 'Power outages, electrical infrastructure',
  agencyId: 'agency2'
},
{
  id: 'cat5',
  name: 'Waste Management',
  description: 'Garbage collection, recycling issues',
  agencyId: 'agency2'
},
{
  id: 'cat6',
  name: 'Public Health',
  description: 'Health hazards, disease concerns',
  agencyId: 'agency3'
},
{
  id: 'cat7',
  name: 'Park Maintenance',
  description: 'Issues with parks, playgrounds, or recreational facilities',
  agencyId: 'agency4'
}];


// Mock Complaints
export const MOCK_COMPLAINTS: Complaint[] = [
{
  id: 'comp1',
  title: 'Pothole on Main Street',
  description: 'Large pothole near 123 Main St causing traffic and vehicle damage',
  categoryId: 'cat1',
  status: 'in_progress',
  createdAt: '2023-06-15T10:30:00Z',
  updatedAt: '2023-06-16T14:20:00Z',
  userId: 'user1',
  assignedToAgencyId: 'agency1',
  responses: [
  {
    id: 'resp1',
    complaintId: 'comp1',
    userId: 'user3',
    userRole: 'agency',
    message: 'Thank you for your report. We have scheduled a repair team to fix this pothole within the next 48 hours.',
    createdAt: '2023-06-16T14:20:00Z'
  }],

  location: {
    address: '123 Main St, Anytown',
    lat: 40.7128,
    lng: -74.0060
  }
},
{
  id: 'comp2',
  title: 'Streetlight Out',
  description: 'Streetlight at corner of Elm and Oak has been out for several days',
  categoryId: 'cat4',
  status: 'pending',
  createdAt: '2023-06-17T09:15:00Z',
  updatedAt: '2023-06-17T09:15:00Z',
  userId: 'user1',
  assignedToAgencyId: null,
  responses: [],
  location: {
    address: 'Corner of Elm St and Oak St, Anytown'
  }
},
{
  id: 'comp3',
  title: 'Trash Not Collected',
  description: 'Scheduled trash pickup was missed for the entire block of Pine Avenue',
  categoryId: 'cat5',
  status: 'resolved',
  createdAt: '2023-06-10T08:45:00Z',
  updatedAt: '2023-06-12T16:30:00Z',
  userId: 'user1',
  assignedToAgencyId: 'agency2',
  responses: [
  {
    id: 'resp2',
    complaintId: 'comp3',
    userId: 'user4',
    userRole: 'agency',
    message: 'We apologize for the missed collection. A special pickup has been scheduled for tomorrow morning.',
    createdAt: '2023-06-11T11:20:00Z'
  },
  {
    id: 'resp3',
    complaintId: 'comp3',
    userId: 'user4',
    userRole: 'agency',
    message: 'The special collection has been completed. Please let us know if you have any further issues.',
    createdAt: '2023-06-12T16:30:00Z'
  }],

  location: {
    address: 'Pine Avenue, Anytown'
  }
},
{
  id: 'comp4',
  title: 'Park Playground Equipment Damaged',
  description: 'The slide in Central Park playground is broken and has sharp edges',
  categoryId: 'cat7',
  status: 'assigned',
  createdAt: '2023-06-16T15:20:00Z',
  updatedAt: '2023-06-17T09:10:00Z',
  userId: 'user1',
  assignedToAgencyId: 'agency4',
  responses: [
  {
    id: 'resp4',
    complaintId: 'comp4',
    userId: 'user2',
    userRole: 'admin',
    message: 'Your complaint has been assigned to the Parks & Recreation department. They will assess the damage shortly.',
    createdAt: '2023-06-17T09:10:00Z'
  }],

  location: {
    address: 'Central Park, Anytown',
    lat: 40.7829,
    lng: -73.9654
  }
}];


export const getAgencyById = (id: string): Agency | undefined => {
  return MOCK_AGENCIES.find((agency) => agency.id === id);
};

export const getCategoryById = (id: string): Category | undefined => {
  return MOCK_CATEGORIES.find((category) => category.id === id);
};

export const getUserById = (id: string): User | undefined => {
  return MOCK_USERS.find((user) => user.id === id);
};