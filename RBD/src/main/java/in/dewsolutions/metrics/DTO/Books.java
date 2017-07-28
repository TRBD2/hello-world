package in.dewsolutions.metrics.DTO;

import java.util.Date;

public class Books {
	
	Integer id;
	String standaredName;
	Date createdOn;
	Date modifiedOn;
	Integer status;
	String boardName;
	String bookType;
	String subjectName;
	Integer standaredId;
	Integer bookId;
	Integer boardId;
	Integer subjectId;
	
	Integer transactionTypeId;
	Integer noOfBook;
	
	Integer groupSetId;
	Integer bookMappingId;

	String groupName;
	


	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public Integer getStandaredId() {
		return standaredId;
	}
	public void setStandaredId(Integer standaredId) {
		this.standaredId = standaredId;
	}
	public Integer getBookId() {
		return bookId;
	}
	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}
	public Integer getBoardId() {
		return boardId;
	}
	public void setBoardId(Integer boardId) {
		this.boardId = boardId;
	}
	public Integer getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(Integer subjectId) {
		this.subjectId = subjectId;
	}
	public Integer getTransactionTypeId() {
		return transactionTypeId;
	}
	public void setTransactionTypeId(Integer transactionTypeId) {
		this.transactionTypeId = transactionTypeId;
	}
	public Integer getNoOfBook() {
		return noOfBook;
	}
	public void setNoOfBook(Integer noOfBook) {
		this.noOfBook = noOfBook;
	}
	
	public String getBoardName() {
		return boardName;
	}
	public void setBoardName(String boardName) {
		this.boardName = boardName;
	}
	public String getBookType() {
		return bookType;
	}
	public void setBookType(String bookType) {
		this.bookType = bookType;
	}
	public String getSubjectName() {
		return subjectName;
	}
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
		public String getStandaredName() {
		return standaredName;
	}
	public void setStandaredName(String standaredName) {
		this.standaredName = standaredName;
	}
		public Date getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}
	public Date getModifiedOn() {
		return modifiedOn;
	}
	public void setModifiedOn(Date modifiedOn) {
		this.modifiedOn = modifiedOn;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	
	public Integer getGroupSetId() {
		return groupSetId;
	}
	public void setGroupSetId(Integer groupSetId) {
		this.groupSetId = groupSetId;
	}
	
	public Integer getBookMappingId() {
		return bookMappingId;
	}
	public void setBookMappingId(Integer bookMappingId) {
		this.bookMappingId = bookMappingId;
	}
}
