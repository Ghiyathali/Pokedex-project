function Pagination({ onPrevious, onNext, previousDisabled, nextDisabled }) {
    return (
      <div className="pagination">
        <button 
          className="pagination-button"
          onClick={onPrevious} 
          disabled={previousDisabled}
        >
          &laquo; Previous
        </button>
        
        <button 
          className="pagination-button"
          onClick={onNext} 
          disabled={nextDisabled}
        >
          Next &raquo;
        </button>
      </div>
    );
  }
  
  export default Pagination;