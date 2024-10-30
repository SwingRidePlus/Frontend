export type calendar = {
    selectedDays: {
      start: Date | null;
      end: Date | null;
    };
    setSelectedDays: (days: { start: Date | null; end: Date | null }) => void;
    currentMonth: Date;
    reservedDays: Date[]; 
};