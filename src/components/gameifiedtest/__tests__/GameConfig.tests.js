import { sampleTestData } from '../GameConfig';

describe('Question IDs', () => {
  it('should all be unique and non-empty', () => {
    const ids = sampleTestData.map(q => q.id);
    const uniqueIds = new Set(ids);

    expect(ids.every(id => !!id)).toBe(true); // No empty IDs
    expect(ids.length).toBe(uniqueIds.size);  // All unique
  });
});