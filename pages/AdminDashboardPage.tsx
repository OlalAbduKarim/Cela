
import React, { useState, useCallback } from 'react';
import { Event, Letter, EventCategory } from '../types';
import { EVENT_CATEGORIES } from '../constants';
import AdminLayout from '../components/AdminLayout';
import Modal from '../components/Modal';
import { PlusIcon, PencilSquareIcon, TrashIcon, EyeIcon, XMarkIcon as XMarkIconSolid, PhotoIcon } from '@heroicons/react/24/solid';
import * as ReactRouterDOM from 'react-router-dom';

interface AdminDashboardPageProps {
  events: Event[];
  letters: Letter[];
  onAddEvent: (event: Omit<Event, 'id'>) => void;
  onUpdateEvent: (event: Event) => void;
  onDeleteEvent: (eventId: string) => void;
  onAddLetter: (letter: Omit<Letter, 'id'>) => void;
  onUpdateLetter: (letter: Letter) => void;
  onDeleteLetter: (letterId: string) => void;
  onLogout: () => void;
}

type FormMode = 'add' | 'edit';

const emptyEvent: Omit<Event, 'id'> = {
  title: '',
  category: EventCategory.TOURS,
  date: '',
  location: '',
  descriptionShort: '',
  descriptionFull: '',
  images: [],
  featured: false,
};

const emptyLetter: Omit<Letter, 'id'> = {
  title: '',
  content: '',
  publishDate: '',
  author: '',
};

const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({
  events, letters, onAddEvent, onUpdateEvent, onDeleteEvent,
  onAddLetter, onUpdateLetter, onDeleteLetter, onLogout
}) => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);
  const [eventFormMode, setEventFormMode] = useState<FormMode>('add');
  const [letterFormMode, setLetterFormMode] = useState<FormMode>('add');
  const [currentEvent, setCurrentEvent] = useState<Event | Omit<Event, 'id'>>(emptyEvent);
  const [currentLetter, setCurrentLetter] = useState<Letter | Omit<Letter, 'id'>>(emptyLetter);
  const [isDragging, setIsDragging] = useState(false);

  // Event Handlers
  const handleOpenAddEventModal = () => {
    setEventFormMode('add');
    setCurrentEvent(emptyEvent);
    setIsEventModalOpen(true);
  };

  const handleOpenEditEventModal = (event: Event) => {
    setEventFormMode('edit');
    setCurrentEvent(event);
    setIsEventModalOpen(true);
  };

  const handleEventFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const name = target.name;
    
    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
         setCurrentEvent(prev => ({ ...prev, [name]: target.checked }));
    } else {
        setCurrentEvent(prev => ({ ...prev, [name]: target.value }));
    }
  };
  
  const processFiles = (files: FileList | null) => {
    if (files) {
      const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
      imageFiles.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setCurrentEvent(prev => ({
            ...prev,
            images: [...(prev.images || []), reader.result as string],
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    processFiles(e.target.files);
  };

  const handleImageDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  
  const handleRemoveImage = (indexToRemove: number) => {
    setCurrentEvent(prev => ({
        ...prev,
        images: (prev.images || []).filter((_, index) => index !== indexToRemove),
    }));
  };


  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (eventFormMode === 'add') {
      onAddEvent(currentEvent as Omit<Event, 'id'>);
    } else {
      onUpdateEvent(currentEvent as Event);
    }
    setIsEventModalOpen(false);
    setIsDragging(false); // Reset drag state
  };

  // Letter Handlers
  const handleOpenAddLetterModal = () => {
    setLetterFormMode('add');
    setCurrentLetter(emptyLetter);
    setIsLetterModalOpen(true);
  };

  const handleOpenEditLetterModal = (letter: Letter) => {
    setLetterFormMode('edit');
    setCurrentLetter(letter);
    setIsLetterModalOpen(true);
  };

  const handleLetterFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentLetter(prev => ({ ...prev, [name]: value }));
  };

  const handleLetterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (letterFormMode === 'add') {
      onAddLetter(currentLetter as Omit<Letter, 'id'>);
    } else {
      onUpdateLetter(currentLetter as Letter);
    }
    setIsLetterModalOpen(false);
  };
  
  const commonInputClass = "mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm";
  const commonLabelClass = "block text-sm font-medium text-neutral-700";


  return (
    <AdminLayout onLogout={onLogout}>
      <h2 className="text-3xl font-bold font-heading text-neutral-dark mb-8">Admin Dashboard</h2>

      {/* Events Management */}
      <section className="mb-12 p-6 bg-white rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold font-heading text-primary">Manage Events</h3>
          <button
            onClick={handleOpenAddEventModal}
            className="inline-flex items-center px-4 py-2 bg-accent hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-md"
          >
            <PlusIcon className="h-5 w-5 mr-2" /> Add Event
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-light">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {events.map(event => (
                <tr key={event.id} className="hover:bg-neutral-light/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-dark">{event.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral">{event.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral">{new Date(event.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <ReactRouterDOM.Link to={`/events/${event.id}`} target="_blank" className="text-blue-600 hover:text-blue-900" title="View Event">
                        <EyeIcon className="h-5 w-5 inline"/>
                    </ReactRouterDOM.Link>
                    <button onClick={() => handleOpenEditEventModal(event)} className="text-yellow-500 hover:text-yellow-700" title="Edit Event">
                      <PencilSquareIcon className="h-5 w-5 inline"/>
                    </button>
                    <button onClick={() => { if(window.confirm('Are you sure you want to delete this event?')) onDeleteEvent(event.id);}} className="text-red-600 hover:text-red-900" title="Delete Event">
                      <TrashIcon className="h-5 w-5 inline"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Letters Management */}
      <section className="p-6 bg-white rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold font-heading text-primary">Manage Announcements</h3>
          <button
            onClick={handleOpenAddLetterModal}
            className="inline-flex items-center px-4 py-2 bg-accent hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-md"
          >
            <PlusIcon className="h-5 w-5 mr-2" /> Add Announcement
          </button>
        </div>
         <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-light">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Publish Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Author</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral uppercase tracking-wider">Actions</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                {letters.map(letter => (
                    <tr key={letter.id} className="hover:bg-neutral-light/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-dark">{letter.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral">{new Date(letter.publishDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral">{letter.author}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button onClick={() => handleOpenEditLetterModal(letter)} className="text-yellow-500 hover:text-yellow-700" title="Edit Announcement">
                            <PencilSquareIcon className="h-5 w-5 inline"/>
                        </button>
                        <button onClick={() => {if(window.confirm('Are you sure you want to delete this announcement?')) onDeleteLetter(letter.id);}} className="text-red-600 hover:text-red-900" title="Delete Announcement">
                            <TrashIcon className="h-5 w-5 inline"/>
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* Event Modal */}
      <Modal isOpen={isEventModalOpen} onClose={() => { setIsEventModalOpen(false); setIsDragging(false); }} title={eventFormMode === 'add' ? 'Add New Event' : 'Edit Event'} size="xl">
        <form onSubmit={handleEventSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto p-2">
          <div>
            <label htmlFor="title" className={commonLabelClass}>Title</label>
            <input type="text" name="title" id="title" value={(currentEvent as Event).title} onChange={handleEventFormChange} className={commonInputClass} required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="category" className={commonLabelClass}>Category</label>
                <select name="category" id="category" value={(currentEvent as Event).category} onChange={handleEventFormChange} className={commonInputClass} required>
                {EVENT_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="date" className={commonLabelClass}>Date</label>
                <input type="date" name="date" id="date" value={(currentEvent as Event).date} onChange={handleEventFormChange} className={commonInputClass} required />
            </div>
          </div>
          <div>
            <label htmlFor="location" className={commonLabelClass}>Location</label>
            <input type="text" name="location" id="location" value={(currentEvent as Event).location} onChange={handleEventFormChange} className={commonInputClass} required />
          </div>
          <div>
            <label htmlFor="descriptionShort" className={commonLabelClass}>Short Description</label>
            <textarea name="descriptionShort" id="descriptionShort" value={(currentEvent as Event).descriptionShort} onChange={handleEventFormChange} rows={3} className={commonInputClass} required />
          </div>
          <div>
            <label htmlFor="descriptionFull" className={commonLabelClass}>Full Description</label>
            <textarea name="descriptionFull" id="descriptionFull" value={(currentEvent as Event).descriptionFull} onChange={handleEventFormChange} rows={6} className={commonInputClass} required />
          </div>
          
          {/* Image Upload Section */}
          <div>
            <label htmlFor="image-upload-input" className={commonLabelClass}>Images</label>
            <div
              className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${isDragging ? 'border-primary' : 'border-neutral-300'} border-dashed rounded-md cursor-pointer hover:border-primary transition-colors`}
              onDrop={handleImageDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              aria-labelledby="image-upload-label"
            >
              <div className="space-y-1 text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-neutral-400" aria-hidden="true" />
                <div className="flex text-sm text-neutral-600">
                  <label
                    id="image-upload-label"
                    htmlFor="image-upload-input"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                  >
                    <span>Upload files</span>
                    <input id="image-upload-input" name="image-upload-input" type="file" className="sr-only" multiple accept="image/*" onChange={handleImageFileChange} />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-neutral-500">PNG, JPG, GIF, WebP</p>
              </div>
            </div>
          </div>

          {/* Image Previews */}
          {(currentEvent.images && currentEvent.images.length > 0) && (
            <div className="mt-4">
              <p className={commonLabelClass}>Selected Images ({currentEvent.images.length}):</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-2">
                {currentEvent.images.map((imageSrc, index) => (
                  <div key={index} className="relative group aspect-square">
                    <img src={imageSrc} alt={`Preview ${index + 1}`} className="object-cover w-full h-full rounded-md shadow-md" />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-0.5 hover:bg-red-700 opacity-80 group-hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-red-500"
                      aria-label={`Remove image ${index + 1}`}
                    >
                      <XMarkIconSolid className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* End Image Upload Section */}

          <div className="flex items-center">
            <input type="checkbox" name="featured" id="featured" checked={(currentEvent as Event).featured || false} onChange={handleEventFormChange} className="h-4 w-4 text-primary border-neutral-300 rounded focus:ring-primary" />
            <label htmlFor="featured" className="ml-2 block text-sm text-neutral-700">Featured Event</label>
          </div>
          <div className="pt-2 flex justify-end space-x-2">
            <button type="button" onClick={() => { setIsEventModalOpen(false); setIsDragging(false); }} className="px-4 py-2 border border-neutral-300 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-light">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-primary hover:bg-blue-700 text-white text-sm font-medium rounded-md">{eventFormMode === 'add' ? 'Add Event' : 'Save Changes'}</button>
          </div>
        </form>
      </Modal>

      {/* Letter Modal */}
      <Modal isOpen={isLetterModalOpen} onClose={() => setIsLetterModalOpen(false)} title={letterFormMode === 'add' ? 'Add New Announcement' : 'Edit Announcement'} size="lg">
        <form onSubmit={handleLetterSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto p-2">
          <div>
            <label htmlFor="letterTitle" className={commonLabelClass}>Title</label>
            <input type="text" name="title" id="letterTitle" value={(currentLetter as Letter).title} onChange={handleLetterFormChange} className={commonInputClass} required />
          </div>
           <div>
            <label htmlFor="publishDate" className={commonLabelClass}>Publish Date</label>
            <input type="date" name="publishDate" id="publishDate" value={(currentLetter as Letter).publishDate} onChange={handleLetterFormChange} className={commonInputClass} required />
          </div>
          <div>
            <label htmlFor="author" className={commonLabelClass}>Author (Optional)</label>
            <input type="text" name="author" id="author" value={(currentLetter as Letter).author || ''} onChange={handleLetterFormChange} className={commonInputClass} />
          </div>
          <div>
            <label htmlFor="content" className={commonLabelClass}>Content</label>
            <textarea name="content" id="content" value={(currentLetter as Letter).content} onChange={handleLetterFormChange} rows={10} className={commonInputClass} required />
          </div>
          <div className="pt-2 flex justify-end space-x-2">
            <button type="button" onClick={() => setIsLetterModalOpen(false)} className="px-4 py-2 border border-neutral-300 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-light">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-primary hover:bg-blue-700 text-white text-sm font-medium rounded-md">{letterFormMode === 'add' ? 'Add Announcement' : 'Save Changes'}</button>
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
};

export default AdminDashboardPage;
