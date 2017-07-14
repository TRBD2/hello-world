package in.dewsolutions.metrics.DAO;

import java.util.List;

import org.springframework.stereotype.Repository;

import in.dewsolutions.metrics.DTO.MetricsDTO;

@Repository
public interface MetricDAO {
	
	public String insertMetrics(MetricsDTO metrics);
	
	public List<MetricsDTO> getMetrics();
	
	


}
