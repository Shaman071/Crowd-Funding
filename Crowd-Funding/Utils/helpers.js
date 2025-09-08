export const generateId = () => 
  `proj_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
