﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ProjetoPontos.Data;

#nullable disable

namespace ProjetoPontos.Migrations
{
    [DbContext(typeof(LojaDbContext))]
    [Migration("20231004011438_CorrecaoUsuario")]
    partial class CorrecaoUsuario
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.11");

            modelBuilder.Entity("ProjetoPontos.Models.Brinde", b =>
                {
                    b.Property<int?>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.Property<int?>("ValorPontos")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Brindes");
                });

            modelBuilder.Entity("ProjetoPontos.Models.Cliente", b =>
                {
                    b.Property<string>("Cpf")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("DataCadastro")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("NumeroTelefone")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("TEXT");

                    b.Property<int?>("Pontos")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("TEXT");

                    b.Property<decimal>("ValorTotalGasto")
                        .HasColumnType("TEXT");

                    b.HasKey("Cpf");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("ProjetoPontos.Models.Login", b =>
                {
                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("TEXT");

                    b.ToTable("Logins");
                });

            modelBuilder.Entity("ProjetoPontos.Models.Pedido", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClienteId")
                        .HasColumnType("TEXT");

                    b.Property<int>("ValorTotalPontos")
                        .HasColumnType("INTEGER")
                        .HasColumnName("ValorTotalPontos");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

                    b.ToTable("Pedido");
                });

            modelBuilder.Entity("ProjetoPontos.Models.Usuario", b =>
                {
                    b.Property<string>("Cpf")
                        .HasColumnType("TEXT");

                    b.Property<string>("Cargo")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("DataCadastro")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("TEXT");

                    b.HasKey("Cpf");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("ProjetoPontos.Models.Pedido", b =>
                {
                    b.HasOne("ProjetoPontos.Models.Cliente", "Cliente")
                        .WithMany()
                        .HasForeignKey("ClienteId");

                    b.Navigation("Cliente");
                });
#pragma warning restore 612, 618
        }
    }
}
