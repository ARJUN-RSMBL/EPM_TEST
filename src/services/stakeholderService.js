const BASE_URL = 'http://localhost:8080/api/stakeholders';

export const getStakeholders = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const addStakeholder = async (stakeholder) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(stakeholder),
  });
  return response.json();
};
