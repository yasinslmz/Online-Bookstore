using Microsoft.IdentityModel.Tokens;
using ProductManagementWebApi.Models.Interface;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace ProductManagementWebApi.Models.Services
{
    public class TokenService:ITokenService
    {
        readonly IConfiguration configuration;
        public TokenService(IConfiguration _configration) 
        {
        this.configuration = _configration;
        }

        public Task<GenerateTokenResponse> GenerateTokenAsync(GenerateTokenRequest request)
        {
            SymmetricSecurityKey symmetricSecurityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(configuration["AppSettings:Secret"]));
            
            var dateTime= DateTime.Now;
            
            JwtSecurityToken jwt=new JwtSecurityToken(
                issuer: configuration["AppSettings:ValidIssuer"],
                audience: configuration["AppSettings:ValidAudience"],
                claims:new List<Claim>
                {
                    new Claim("userName",request.Username)
                },
                notBefore:dateTime,
                expires:dateTime.Add(TimeSpan.FromMinutes(60)),
                signingCredentials:new SigningCredentials(symmetricSecurityKey,SecurityAlgorithms.HmacSha256)
            );
            return Task.FromResult(new GenerateTokenResponse
            {
                Token=new JwtSecurityTokenHandler().WriteToken(jwt),
                TokenExpireDate=dateTime.Add(TimeSpan.FromMinutes(60)),
            });
        }

        
    }
}
