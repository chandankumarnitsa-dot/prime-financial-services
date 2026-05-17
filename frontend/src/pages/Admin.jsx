import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const result = await response.json();
        setContacts(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="admin-page" style={{ paddingTop: '140px', paddingBottom: '4rem', paddingLeft: '2rem', paddingRight: '2rem', maxWidth: '1400px', margin: '0 auto', minHeight: '80vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#1E293B', fontSize: '2rem', fontWeight: '700' }}>Lead Management (Admin)</h1>
        <div style={{ backgroundColor: '#DBEAFE', color: '#1E40AF', padding: '0.5rem 1rem', borderRadius: '9999px', fontWeight: '600' }}>
          Total Leads: {contacts.length}
        </div>
      </div>
      
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '1.25rem', color: '#64748B' }}>Loading contacts...</p>
        </div>
      )}
      
      {error && (
        <div style={{ padding: '1rem', backgroundColor: '#FEE2E2', color: '#991B1B', borderRadius: '8px', border: '1px solid #F87171' }}>
          <p><strong>Error:</strong> {error}</p>
        </div>
      )}
      
      {!loading && !error && contacts.length === 0 && (
        <div style={{ padding: '4rem 2rem', backgroundColor: '#F8FAFC', borderRadius: '12px', textAlign: 'center', border: '2px dashed #CBD5E1' }}>
          <p style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '1rem' }}>No enquiries have been submitted yet.</p>
          <p style={{ color: '#94A3B8' }}>Once a user fills out the contact form, their information will appear here.</p>
        </div>
      )}

      {!loading && !error && contacts.length > 0 && (
        <div style={{ backgroundColor: 'white', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                <tr>
                  <th style={{ padding: '1.25rem 1rem', fontWeight: '600', color: '#334155' }}>Date</th>
                  <th style={{ padding: '1.25rem 1rem', fontWeight: '600', color: '#334155' }}>Name</th>
                  <th style={{ padding: '1.25rem 1rem', fontWeight: '600', color: '#334155' }}>Contact Info</th>
                  <th style={{ padding: '1.25rem 1rem', fontWeight: '600', color: '#334155' }}>Services Requested</th>
                  <th style={{ padding: '1.25rem 1rem', fontWeight: '600', color: '#334155', textAlign: 'center' }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <React.Fragment key={contact.id}>
                    <tr style={{ borderBottom: '1px solid #F1F5F9', transition: 'background-color 0.2s', backgroundColor: expandedId === contact.id ? '#F8FAFC' : 'transparent' }}>
                      <td style={{ padding: '1.25rem 1rem', color: '#64748B', whiteSpace: 'nowrap' }}>
                        {new Date(contact.receivedAt).toLocaleDateString()}<br/>
                        <span style={{ fontSize: '0.8rem' }}>{new Date(contact.receivedAt).toLocaleTimeString()}</span>
                      </td>
                      <td style={{ padding: '1.25rem 1rem', fontWeight: '600', color: '#0F172A' }}>{contact.name}</td>
                      <td style={{ padding: '1.25rem 1rem' }}>
                        <div style={{ color: '#2563EB', fontWeight: '500' }}>{contact.email}</div>
                        <div style={{ color: '#475569', marginTop: '0.25rem' }}>{contact.phone}</div>
                        {contact.city && <div style={{ color: '#94A3B8', fontSize: '0.875rem' }}>{contact.city}</div>}
                      </td>
                      <td style={{ padding: '1.25rem 1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          {contact.personalLoan && <span style={{ backgroundColor: '#E0E7FF', color: '#4338CA', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem', width: 'fit-content' }}>Loan: {contact.personalLoan}</span>}
                          {contact.creditCard && <span style={{ backgroundColor: '#FEF3C7', color: '#D97706', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem', width: 'fit-content' }}>Card: {contact.creditCard}</span>}
                        </div>
                      </td>
                      <td style={{ padding: '1.25rem 1rem', textAlign: 'center' }}>
                        <button 
                          onClick={() => toggleExpand(contact.id)}
                          style={{ 
                            backgroundColor: expandedId === contact.id ? '#E2E8F0' : '#F1F5F9', 
                            color: '#475569', 
                            border: 'none', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '6px', 
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'all 0.2s'
                          }}
                        >
                          {expandedId === contact.id ? 'Hide Details' : 'View Full Details'}
                        </button>
                      </td>
                    </tr>
                    {expandedId === contact.id && (
                      <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                        <td colSpan="5" style={{ padding: '1.5rem' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                            <div>
                              <h4 style={{ color: '#64748B', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Additional Profile</h4>
                              <p><strong>Income:</strong> {contact.income || 'Not provided'}</p>
                              <p><strong>Language:</strong> {contact.language || 'Not provided'}</p>
                              <p><strong>Facing Harassment:</strong> {contact.harassment === 'Yes' ? <span style={{ color: '#DC2626', fontWeight: 'bold' }}>Yes</span> : (contact.harassment || 'Not provided')}</p>
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                              <h4 style={{ color: '#64748B', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Verbatim / Problem Description</h4>
                              <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0', whiteSpace: 'pre-wrap', color: '#334155', minHeight: '80px' }}>
                                {contact.problems ? contact.problems : <span style={{ color: '#94A3B8', fontStyle: 'italic' }}>No verbatim provided.</span>}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
